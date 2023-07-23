import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [friendSelected, setFriendSelected] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends(() => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelect(friend) {
    setFriendSelected(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelection={handleSelect} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {friendSelected && <FormSplitBill friendSelected={friendSelected} />}
    </div>
  );
}

function FriendList({ friends, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelection={onSelection} />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? `green` : friend.balance > 0 ? `red` : ""
        }
      >
        {friend.balance > 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)} $`
          : friend.balance < 0
          ? `${friend.name} owes you ${Math.abs(friend.balance)} $`
          : `You and ${friend.name} are even`}
      </p>
      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      id,
      balance: 0,
      image: `${image}?=${id}`,
    };

    setName("");
    setImage("https://i.pravatar.cc/48");

    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👭 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌇 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ friendSelected }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friendSelected.name}</h2>

      <label>💰️ Bill Value</label>
      <input type="text" />

      <label>🧑‍🦱 Your Expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill ?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{friendSelected.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}