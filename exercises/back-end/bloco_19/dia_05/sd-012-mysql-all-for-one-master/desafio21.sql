--  21 - Adicione, com um único INSERT, duas linhas ao order_details com os mesmos dados. Esses dados são novamente order_id: 69, product_id: 80, quantity: 15.0000, unit_price: 15.0000, discount: 0, status_id: 2, date_allocated: NULL, purchase_order_id: NULL e inventory_id: 129 (o ìd deve ser incrementado automaticamente).
INSERT INTO
  order_details (
    order_id,
    product_id,
    quantity,
    unit_price,
    discount,
    status_id,
    date_allocated,
    purchase_order_id,
    inventory_id
  )
VALUES
  (69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129),
  (69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129);
