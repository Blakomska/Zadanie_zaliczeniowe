import { test, expect } from "@playwright/test";

const endpoint = '/api/index.php?endpoint=products';

const produkt = {

  name: "Zaliczenie produkt testowy",
  price: 99.99,
  currency: "PLN",

};

test('Test API - GET', async ({ request }) => {

    const response = await request.get(endpoint);

    expect(response.status()).toBe(200);

}
);


test("Test API - POST", async ({ request }) => {

  const response = await request.post(endpoint, { data: produkt });

  const body = await response.json();

  expect(response.status()).toBe(201);
  expect(body.product.name).toBe(produkt.name);
});


test("Test API - PUT", async ({ request }) => {
  const response = await request.put(`${endpoint}&id=7`, {
    data: {
      name: "Zaliczenie nowy zupdatowany produkt",
      price: 100.00,
    },
  });

  const body = await response.json();
  expect(response.status()).toBe(200);

  expect(body.product.name).toBe("Zaliczenie nowy zupdatowany produkt");
});



test("Test API - PATCH", async ({ request }) => {

  const response = await request.patch(`${endpoint}&id=7`, {
    data: {
      price: 89.99,
      //name: "Zaliczenie zupdatowany produkt",
    },
  });

  const body = await response.json();
  expect(response.status()).toBe(200);
  expect(body.product.price).toBe(89.99);
  //expect(body.product.name).toBe("Zaliczenie zupdatowany produkt");
});


test("Test API - DELETE", async ({ request }) => {

  const createResponse = await request.post(endpoint, {

    data: {
      name: "Zaliczenie produkt testowy do usuniecia",
      price: 50.00,
      currency: "PLN",
    },
  });

  const { product } = await createResponse.json();
  const response = await request.delete(`${endpoint}&id=${product.id}`);

  expect(response.status()).toBe(204);
});