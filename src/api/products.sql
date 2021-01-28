DROP TABLE IF EXISTS  products;

  CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL CHECK (name != ''),
      description VARCHAR(255) NOT NULL CHECK (description != ''),
      price DECIMAL(2) NOT NULL,
      image VARCHAR,
      images VARCHAR,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );