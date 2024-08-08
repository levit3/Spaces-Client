function EventCreation() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [spaceId, setSpaceId] = useState('');
  const [user, setUser] = useState(null);
  const [bookedSpaces, setBookedSpaces] = useState([]);

  const images = {
    main: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjcsyLgOPmDPJOSVNXpaxCQlnPVLaQeHx4A&s"  };

  useEffect(() => {
    fetch("http://localhost:5555/api/users/92")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);
}

export default EventCreation;