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

  async function fetchCats() {
    const apiUrl = "https://catfact.ninja/fact";
    let res = "";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
      const data = await response.json();
      res = data.fact;
    } catch (error) {
      console.error("Error fetching cats:", error);
    }
    return res;
  }
  async function fetchDogs() {
    const apiUrl = "https://dog.ceo/api/breeds/image/random";
    let res = "";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
      const data = await response.json();
      console.log(data.message);
      res = data.message;
    } catch (error) {
      console.error("Error fetching cats:", error);
    }
    return res;
  }

  function fetchBears() {
    const apiUrl = "https://placebear.com/g/200/300";
    return apiUrl;
  }

  return (
    <div className="scroll-container">
      <Row
        card1={{ title: "Element1", color: "pink", funcTorun: fetchJoke }}
        card2={{ title: "Element2", color: "green", funcTorun: fetchCats }}
      />
      <Row
        card1={{ title: "Element3", color: "purple", funcTorun: fetchDogs }}
        card2={{ title: "Element4", color: "blue", funcTorun: fetchBears }}
      />
    </div>
  );
}
