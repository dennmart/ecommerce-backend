/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("products", {
    id: "id",
    name: { type: "varchar(200)", notNull: true },
    description: { type: "varchar(2000)" },
  });

  pgm.createIndex("products", [{ name: "name", method: "gin" }]);

  pgm.sql(`
    INSERT INTO products (name, description) VALUES
    ('Used Computer', 'This is a used computer that still works'),
    ('Latest Video Game', 'Play the latest and greatest game on your PC'),
    ('Expensive Vacuum Cleaner', 'Clean up your home with this pricy vacuum cleaner'),
    ('Toys for Tots', 'Buy this and donate it to charity'),
    ('Stylish Hair Dryer', 'Dry your hair and look good while doing it')
  `);
};

exports.down = (pgm) => {
  pgm.dropTable("products");
};
