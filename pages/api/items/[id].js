let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

export default function handler(req, res) {
  const { id } = req.query; // Get the item ID from the query string

  if (req.method === "PUT") {
    const itemIndex = items.findIndex((item) => item.id === parseInt(id));

    if (itemIndex === -1) {
      res.status(404).json({ message: "Item not found" });
    } else {
      items[itemIndex].name = req.body.name; // Update the item name
      res.status(200).json(items[itemIndex]);
    }
  } else if (req.method === "DELETE") {
    const itemIndex = items.findIndex((item) => item.id === parseInt(id));

    if (itemIndex === -1) {
      res.status(404).json({ message: "Item not found" });
    } else {
      const deletedItem = items.splice(itemIndex, 1); // Remove the item from the list
      res.status(200).json(deletedItem[0]); // Return the deleted item
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
