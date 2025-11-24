export default function Footer() {
  const today = new Date();
  const months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];
  
  const month = months[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  return (
    <footer className="bg-gray-100 py-4 text-center border-t border-gray-300">
      <p className="text-sm text-gray-600">
        Today's Date: {month} {day}, {year}
      </p>
    </footer>
  );
}
