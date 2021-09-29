import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/cardList.scss";
import Swal from "sweetalert2";

const CardList = () => {
  const [cards, setCards] = useState([]);

  // Fetch Data
  useEffect(() => {
    fetch("https://61517f6b4a5f22001701d24c.mockapi.io/foods")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  // Delete Card Function
  const deleteCard = (id) => {
    // SweetAlert2 Control Modal
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredCards = cards.filter((card) => card.id !== id);
        setCards(filteredCards);
        // SweetAlert2 Delete Success Modal
        Swal.fire({
          title: "Deleted!",
          text: "Card has been deleted.",
          icon: "success",
          timer: 2000,
        });
      }
    });
  };

  // Edit Card Function
  const editCard = async (id, title, text) => {
    // Edit Card Input Area
    const { value: formValues } = await Swal.fire({
      title: "Edit Card",
      html:
        `<p>Old Title : ${title}</p><input placeholder="New Title" id="swal-input1" class="swal2-input">` +
        `<p>Old Text : ${text} </p><input placeholder="New Text" id="swal-input2" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });

    if (formValues) {
      // SweetAlert2 Delete Success Modal
      Swal.fire({
        title: "Updated!",
        text: "Card has been updated.",
        icon: "success",
        timer: 2000,
      });

      // Edit Card
      const editedCardList = cards.map((card) => {
        if (id === card.id) {
          return { ...card, title: formValues[0], description: formValues[1] };
        }
        return card;
      });

      setCards(editedCardList);
    }
  };

  return (
    <>
      <div className="cards">
        {/* Render Cards */}
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              deleteCard={deleteCard}
              editCard={editCard}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
