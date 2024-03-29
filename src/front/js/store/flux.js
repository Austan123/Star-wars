const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      people: [],
      spaceship: [],
      mars: [],
      getPeople: [],
      getTitle: [],
      favorites: [],
    },
    actions: {
      deleteFavorites: (index) => {
        const store = getStore();
        let filtered = store.favorites.filter((item, i) => i != index);
        setStore({ favorites: filtered });
      },
      getPeople: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/people/");
          if (response.ok) {
            const data = await response.json();
            setStore({ people: data.results });
            console.log(data.results);
            return true;
          }
        } catch (error) {
          throw Error("This is my error", error);
        }
      },

      getName: (name) => {
        const store = getStore();
        setStore({ favorites: [...store.favorites, name] });
        console.log(store.favorites);
      },

      getSpaceShip: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/starships/");
          if (response.ok) {
            const data = await response.json();
            setStore({ spaceship: data.results });
            console.log(data.results);
            return true;
          }
        } catch (error) {
          throw Error("This is my error", error);
        }
      },

      getSingle: (id) => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(`https://www.swapi.tech/api/people/${id}`, requestOptions)
          .then((response) => response.json())
          .then((result) => setStore({ getPeople: result }))
          .catch((error) => console.log("error", error));
      },
      getPlanetDesc: (id) => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(`https://swapi.dev/api/planets/${id}`, requestOptions)
          .then((response) => response.json())
          .then((result) => setStore({ mars: result }))
          .catch((error) => console.log("error", error));
      },

      getPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ planets: data.results });
          });
      },
      getTitle: (title) => {
        setStore({ getTitle: title });
      },

      getTodos: () => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/sombra")
          .then((resp) => resp.json())
          .then((data) => setStore({ demo: data }));
      },

      // getMessage: async () => {
      //   try {
      //     // fetching data from the backend
      //     const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
      //     const data = await resp.json();
      //     setStore({ message: data.message });
      //     // don't forget to return something, that is how the async resolves
      //     return data;
      //   } catch (error) {
      //     console.log("Error loading message from backend", error);
      //   }
      // },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
