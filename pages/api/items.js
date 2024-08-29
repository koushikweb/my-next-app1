let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(items); // Returns the list of items
  } else if (req.method === "POST") {
    console.log(res);
    const newItem = { id: Date.now(), name: req.body.name }; // Creates a new item
    items.push(newItem); // Adds the new item to the list
    res.status(201).json(newItem); // Returns the new item
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
