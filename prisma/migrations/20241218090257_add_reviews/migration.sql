-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 1,
    "author" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Inserting 20 sample reviews into the `Review` table

INSERT INTO "Review" ("title", "content", "rating", "author")
VALUES
  ('Great product', 'I really liked this product. It arrived quickly and works as described.', 5, 'John Doe'),
  ('Good, but expensive', 'The product is good, but I expected more for the price.', 3, 'Jane Smith'),
  ('Did not meet expectations', 'I would not recommend it. It works unstably and broke quickly.', 2, 'Michael Johnson'),
  ('Awesome!', 'The quality is outstanding! I will buy again.', 5, 'Anna Brown'),
  ('Product never arrived', 'The product never arrived. Very disappointed.', 1, 'David Wilson'),
  ('Bad service', 'Delivery was late, and the product was poorly packaged.', 2, 'Emily Davis'),
  ('Excellent', 'Everything was perfect, the service was great!', 5, 'James Lee'),
  ('Not what I expected', 'The quality was not as described. I’m returning it.', 2, 'Olivia Clark'),
  ('Very happy', 'This is exactly what I was looking for. Very happy with my purchase.', 5, 'William Harris'),
  ('Quite good', 'The product is fine but not perfect.', 3, 'Sophia Martinez'),
  ('Excellent value for money', 'This product is amazing for the price. Highly recommend it.', 5, 'Daniel Lewis'),
  ('Terrible', 'It broke on the first use. Completely useless.', 1, 'Lucas Walker'),
  ('Satisfactory', 'The product is okay, but it could be improved in certain areas.', 3, 'Lily Walker'),
  ('Perfect for my needs', 'This product is exactly what I needed. No issues so far.', 5, 'Ethan Allen'),
  ('Not recommended', 'It did not work as expected. I won’t buy it again.', 2, 'Chloe Scott'),
  ('Highly satisfied', 'Exceeded all my expectations. Great quality and fast shipping.', 5, 'Benjamin Young'),
  ('Could be better', 'The product is decent but not exceptional.', 3, 'Ava King'),
  ('So far, so good', 'I’ve only used it for a few days, but I am happy with the performance.', 4, 'Jack Green'),
  ('Broken on arrival', 'The item arrived damaged and didn’t work at all.', 1, 'Mia Thompson'),
  ('Good, but needs improvement', 'The design is good, but it’s not very durable.', 3, 'Harper Robinson');
