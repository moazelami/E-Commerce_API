-- =========================
-- CATEGORIES
-- =========================

INSERT INTO categories (name)
VALUES
    ('Electronics'),
    ('Laptops'),
    ('Smartphones'),
    ('Accessories'),
    ('Gaming'),
    ('Home Appliances'),
    ('Office'),
    ('Networking')
    ON CONFLICT DO NOTHING;


-- =========================
-- PRODUCTS
-- =========================

INSERT INTO products
(category_id, name, price, stock)
VALUES

-- Electronics
(
    (SELECT id FROM categories WHERE name = 'Electronics'),
    'Samsung Smart TV 55',
    18500.00,
    15
),
(
    (SELECT id FROM categories WHERE name = 'Electronics'),
    'LG Smart TV 50',
    16000.00,
    10
),
(
    (SELECT id FROM categories WHERE name = 'Electronics'),
    'Sony Sound Bar',
    7500.00,
    20
),
(
    (SELECT id FROM categories WHERE name = 'Electronics'),
    'JBL Bluetooth Speaker',
    3500.00,
    30
),
(
    (SELECT id FROM categories WHERE name = 'Electronics'),
    'Amazon Fire Stick',
    2500.00,
    25
),

-- Laptops
(
    (SELECT id FROM categories WHERE name = 'Laptops'),
    'Dell Inspiron 15',
    32000.00,
    12
),
(
    (SELECT id FROM categories WHERE name = 'Laptops'),
    'HP Pavilion 15',
    29000.00,
    8
),
(
    (SELECT id FROM categories WHERE name = 'Laptops'),
    'Lenovo IdeaPad 5',
    27000.00,
    14
),
(
    (SELECT id FROM categories WHERE name = 'Laptops'),
    'ASUS VivoBook 15',
    30000.00,
    10
),
(
    (SELECT id FROM categories WHERE name = 'Laptops'),
    'MacBook Air M3',
    55000.00,
    6
),

-- Smartphones
(
    (SELECT id FROM categories WHERE name = 'Smartphones'),
    'iPhone 15',
    42000.00,
    10
),
(
    (SELECT id FROM categories WHERE name = 'Smartphones'),
    'iPhone 15 Pro',
    55000.00,
    5
),
(
    (SELECT id FROM categories WHERE name = 'Smartphones'),
    'Samsung Galaxy S24',
    38000.00,
    12
),
(
    (SELECT id FROM categories WHERE name = 'Smartphones'),
    'Samsung Galaxy A55',
    19000.00,
    20
),
(
    (SELECT id FROM categories WHERE name = 'Smartphones'),
    'Xiaomi Redmi Note 13',
    12000.00,
    25
),

-- Accessories
(
    (SELECT id FROM categories WHERE name = 'Accessories'),
    'Logitech Wireless Mouse',
    1200.00,
    50
),
(
    (SELECT id FROM categories WHERE name = 'Accessories'),
    'Logitech Mechanical Keyboard',
    2800.00,
    30
),
(
    (SELECT id FROM categories WHERE name = 'Accessories'),
    'USB-C Cable',
    350.00,
    100
),
(
    (SELECT id FROM categories WHERE name = 'Accessories'),
    'Laptop Stand',
    900.00,
    40
),
(
    (SELECT id FROM categories WHERE name = 'Accessories'),
    'Wireless Charger',
    1500.00,
    35
),

-- Gaming
(
    (SELECT id FROM categories WHERE name = 'Gaming'),
    'PlayStation 5',
    32000.00,
    7
),
(
    (SELECT id FROM categories WHERE name = 'Gaming'),
    'Xbox Series X',
    30000.00,
    6
),
(
    (SELECT id FROM categories WHERE name = 'Gaming'),
    'Gaming Headset',
    2500.00,
    25
),
(
    (SELECT id FROM categories WHERE name = 'Gaming'),
    'Gaming Mouse',
    1800.00,
    40
),
(
    (SELECT id FROM categories WHERE name = 'Gaming'),
    'Gaming Keyboard',
    3200.00,
    30
),

-- Home Appliances
(
    (SELECT id FROM categories WHERE name = 'Home Appliances'),
    'Samsung Washing Machine',
    24000.00,
    8
),
(
    (SELECT id FROM categories WHERE name = 'Home Appliances'),
    'LG Refrigerator',
    45000.00,
    5
),
(
    (SELECT id FROM categories WHERE name = 'Home Appliances'),
    'Philips Air Fryer',
    6000.00,
    18
),
(
    (SELECT id FROM categories WHERE name = 'Home Appliances'),
    'Toshiba Microwave',
    7500.00,
    12
),
(
    (SELECT id FROM categories WHERE name = 'Home Appliances'),
    'Philips Vacuum Cleaner',
    5000.00,
    15
),

-- Office
(
    (SELECT id FROM categories WHERE name = 'Office'),
    'HP Laser Printer',
    8500.00,
    10
),
(
    (SELECT id FROM categories WHERE name = 'Office'),
    'Office Chair',
    4500.00,
    20
),
(
    (SELECT id FROM categories WHERE name = 'Office'),
    'Office Desk',
    6500.00,
    15
),
(
    (SELECT id FROM categories WHERE name = 'Office'),
    'A4 Paper Pack',
    250.00,
    100
),
(
    (SELECT id FROM categories WHERE name = 'Office'),
    'Desk Lamp',
    700.00,
    35
),

-- Networking
(
    (SELECT id FROM categories WHERE name = 'Networking'),
    'TP-Link WiFi Router',
    1800.00,
    30
),
(
    (SELECT id FROM categories WHERE name = 'Networking'),
    'TP-Link 8 Port Switch',
    2200.00,
    20
),
(
    (SELECT id FROM categories WHERE name = 'Networking'),
    'D-Link WiFi Extender',
    1500.00,
    25
),
(
    (SELECT id FROM categories WHERE name = 'Networking'),
    'Network Ethernet Cable',
    200.00,
    100
),
(
    (SELECT id FROM categories WHERE name = 'Networking'),
    '5G Mobile Router',
    6500.00,
    10
);