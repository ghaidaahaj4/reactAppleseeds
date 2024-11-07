import Row from "./Row";

export default function AllCrds() {
  async function fetchJoke() {
    const apiUrl =
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist";
    let res = "hi";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
      const data = await response.json();
      if (data.type === "single") {
        res = data.joke;
      } else {
        res = data.setup + " " + data.delivery;
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
    }

    return res;
  }

  return (
    <div className="scroll-container">
      <Row
        card1={{ title: "Element1", color: "pink", funcTorun: fetchJoke }}
        card2={{ title: "Element2", color: "green" }}
      />
      <Row
        card1={{ title: "Element3", color: "purple" }}
        card2={{ title: "Element4", color: "blue" }}
      />
    </div>
  );
}
