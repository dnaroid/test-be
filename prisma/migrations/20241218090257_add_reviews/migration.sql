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

INSERT INTO "Review" ("title", "content", "rating", "author", "createdAt")
VALUES
  ('Great product', 'I really liked this product. It arrived quickly and works as described.', 5, 'John Doe', '2024-12-18T12:00:00.000Z'),
  ('Good, but expensive', 'The product is good, but I expected more for the price.', 3, 'Jane Smith', '2024-12-17T11:00:00.000Z'),
  ('Did not meet expectations', 'I would not recommend it. It works unstably and broke quickly.', 2, 'Michael Johnson', '2024-12-16T10:00:00.000Z'),
  ('Awesome!', 'The quality is outstanding! I will buy again.', 5, 'Anna Brown', '2024-12-15T09:00:00.000Z'),
  ('Product never arrived', 'The product never arrived. Very disappointed.', 1, 'David Wilson', '2024-12-14T08:00:00.000Z'),
  ('Bad service', 'Delivery was late, and the product was poorly packaged.', 2, 'Emily Davis', '2024-12-13T07:00:00.000Z'),
  ('Excellent', 'Everything was perfect, the service was great!', 5, 'James Lee', '2024-12-12T06:00:00.000Z'),
  ('Not what I expected', 'The quality was not as described. I’m returning it.', 2, 'Olivia Clark', '2024-12-11T05:00:00.000Z'),
  ('Very happy', 'This is exactly what I was looking for. Very happy with my purchase.', 5, 'William Harris', '2024-12-10T04:00:00.000Z'),
  ('Quite good', 'The product is fine but not perfect.', 3, 'Sophia Martinez', '2024-12-09T03:00:00.000Z'),
  ('Excellent value for money', 'This product is amazing for the price. Highly recommend it.', 5, 'Daniel Lewis', '2024-12-08T02:00:00.000Z'),
  ('Terrible', 'It broke on the first use. Completely useless.', 1, 'Lucas Walker', '2024-12-07T01:00:00.000Z'),
  ('Satisfactory', 'The product is okay, but it could be improved in certain areas.', 3, 'Lily Walker', '2024-12-06T00:00:00.000Z'),
  ('Perfect for my needs', 'This product is exactly what I needed. No issues so far.', 5, 'Ethan Allen', '2024-12-05T23:00:00.000Z'),
  ('Not recommended', 'It did not work as expected. I won’t buy it again.', 2, 'Chloe Scott', '2024-12-04T22:00:00.000Z'),
  ('Highly satisfied', 'Exceeded all my expectations. Great quality and fast shipping.', 5, 'Benjamin Young', '2024-12-03T21:00:00.000Z'),
  ('Could be better', 'The product is decent but not exceptional.', 3, 'Ava King', '2024-12-02T20:00:00.000Z'),
  ('So far, so good', 'I’ve only used it for a few days, but I am happy with the performance.', 4, 'Jack Green', '2024-12-01T19:00:00.000Z'),
  ('Broken on arrival', 'The item arrived damaged and didn’t work at all.', 1, 'Mia Thompson', '2024-11-30T18:00:00.000Z'),
  ('Good, but needs improvement', 'The design is good, but it’s not very durable.', 3, 'Harper Robinson', '2024-11-29T17:00:00.000Z');
