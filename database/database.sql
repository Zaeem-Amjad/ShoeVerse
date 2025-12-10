-- ShoeVerse Database Setup for XAMPP
-- IMPORTANT: Run this file ONLY in phpMyAdmin SQL tab

-- Create database
CREATE DATABASE IF NOT EXISTS shoeverse_db;

-- Use the database
USE shoeverse_db;

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) DEFAULT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    INDEX idx_email (email),
    INDEX idx_created_at (created_at),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    gender ENUM('Men', 'Women', 'Unisex', 'Boys', 'Girls') NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    discount INT(3) DEFAULT 0,
    description TEXT,
    stock_status VARCHAR(20) DEFAULT 'In Stock',
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_brand (brand),
    INDEX idx_gender (gender),
    INDEX idx_price (price)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    shipping_address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    payment_method VARCHAR(50) DEFAULT 'Cash on Delivery',
    subtotal DECIMAL(10, 2) NOT NULL,
    shipping_fee DECIMAL(10, 2) DEFAULT 0.00,
    total DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_order_number (order_number),
    INDEX idx_customer_email (customer_email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    order_id INT(11) NOT NULL,
    product_id INT(11) NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    size VARCHAR(10) NOT NULL,
    quantity INT(5) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    INDEX idx_order_id (order_id),
    INDEX idx_product_id (product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'unsubscribed') DEFAULT 'active',
    INDEX idx_email (email),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample contact data
INSERT INTO contacts (name, email, phone, message) VALUES
('John Doe', 'john.doe@example.com', '+1234567890', 'I would like to know more about your running shoes collection.'),
('Sarah Smith', 'sarah.smith@example.com', '+0987654321', 'Do you have Nike AirMax in stock?'),
('Michael Johnson', 'michael.j@example.com', '+1122334455', 'When will you restock the Adidas collection?');

-- Insert sample product data
INSERT INTO products (name, category, brand, gender, price, discount, description, stock_status, image_url) VALUES
('AirFlex Runner Pro', 'Running', 'Nike', 'Men', 120.00, 10, 'Lightweight breathable running shoe', 'In Stock', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'),
('Urban Street Glide', 'Casual', 'Adidas', 'Men', 95.00, 5, 'Premium streetwear design', 'In Stock', 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500'),
('Classic Comfort Walk', 'Casual', 'Bata', 'Men', 60.00, 15, 'Soft sole daily wear', 'In Stock', 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500'),
('Storm X Track', 'Training', 'Puma', 'Women', 110.00, 12, 'High grip training shoe', 'In Stock', 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500'),
('SkyLite Jogger', 'Running', 'Skechers', 'Women', 105.00, 8, 'Extra soft foam', 'Low Stock', 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500');

-- Success message
SELECT 'Database setup completed successfully!' AS Status;