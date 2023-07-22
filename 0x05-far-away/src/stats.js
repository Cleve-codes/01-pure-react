export default function Stats({ items }) {
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.floor((numItemsPacked / numItems) * 100);

  if (!numItems) {
    return (
      <p className="stats">
        <em>Start adding some some items to your packing list</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got everything ready to go."
          : `You have ${numItems} items in your list, and you have packed ${numItemsPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
