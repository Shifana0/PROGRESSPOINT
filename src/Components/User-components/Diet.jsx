import React, { useState, useEffect } from "react";

function Diet({ title, kcal, dayIndex }) {
  const [showdiv, setshowdiv] = useState(false);
  const [meals, setMeals] = useState(() => {
    const savedMeals = localStorage.getItem(`meals-${dayIndex}`);
    return savedMeals ? JSON.parse(savedMeals) : { breakfast: [], lunch: [], dinner: [] };
  });
  const [newMeal, setNewMeal] = useState({ type: "breakfast", item: "" });
  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem(`meals-${dayIndex}`, JSON.stringify(meals));
    checkAllCompleted();
  }, [meals, dayIndex]);

  const checkAllCompleted = () => {
    // Check if ALL meals in the current day are completed
    const isCurrentDayComplete = Object.values(meals).every(
      (mealList) => mealList.length > 0 && mealList.every((meal) => meal.completed)
    );
  
    if (isCurrentDayComplete) {
      localStorage.setItem(`completed-${dayIndex}`, "true");
    } else {
      localStorage.removeItem(`completed-${dayIndex}`);
    }
  
    // ✅ Check if ALL 7 days are completed
    const allDaysCompleted = [...Array(7)].every((_, i) => localStorage.getItem(`completed-${i}`) === "true");
  
    console.log("All days completed?", allDaysCompleted);
  
    if (allDaysCompleted) {
      console.log("✅ All 7 days completed! Clearing all meals...");
      
      setTimeout(() => {
        
        [...Array(7)].forEach((_, i) => {
          localStorage.removeItem(`meals-${i}`);
          localStorage.removeItem(`completed-${i}`);
        });
  
        // 🔄 Reset UI by clearing meals state
        setMeals({ breakfast: [], lunch: [], dinner: [] });
  
        // 🔃 Force UI to refresh
        window.location.reload();
      }, 1500); // Small delay to show success message
    }
  };
  

  const addMeal = () => {
    if (!newMeal.item.trim()) return;
    setMeals((prevMeals) => {
      const updatedMeals = {
        ...prevMeals,
        [newMeal.type]: [...prevMeals[newMeal.type], { name: newMeal.item, completed: false }],
      };
      localStorage.setItem(`meals-${dayIndex}`, JSON.stringify(updatedMeals));
      return updatedMeals;
    });
    setNewMeal({ type: "breakfast", item: "" });
    setAllCompleted(false); // Reset completion status
  };

  const toggleComplete = (mealType, index) => {
    setMeals((prevMeals) => {
      const updatedMeals = { ...prevMeals };
      updatedMeals[mealType][index].completed = !updatedMeals[mealType][index].completed;
      localStorage.setItem(`meals-${dayIndex}`, JSON.stringify(updatedMeals));
      return updatedMeals;
    });
    checkAllCompleted();
  };

  const deleteMeal = (mealType, index) => {
    setMeals((prevMeals) => {
      const updatedMeals = {
        ...prevMeals,
        [mealType]: prevMeals[mealType].filter((_, i) => i !== index),
      };
      localStorage.setItem(`meals-${dayIndex}`, JSON.stringify(updatedMeals));
      return updatedMeals;
    });
    checkAllCompleted();
  };

  return (
    <div className="relative">
      <div className="w-[340px] h-50 shadow-2xl rounded-2xl flex flex-col items-center justify-center transition-transform hover:scale-105">
        <p className="font-bold text-2xl mb-1.5">{title}</p>
        <p className="text-sm text-gray-500">{kcal}</p>
        <button
          className="bg-[#4d493f] text-white rounded-lg w-[100px] mt-3 p-2 cursor-pointer font-medium transition-all duration-300 hover:bg-[#3a372f] active:scale-95"
          onClick={() => setshowdiv(true)}
        >
          View
        </button>
      </div>

      {showdiv && (
        <>
          <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-50 z-10"></div>
          <div className="fixed h-[80vh] w-[90%] max-w-2xl bg-white z-20 top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-2xl shadow-2xl flex flex-col gap-6 overflow-y-auto">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-2xl hover:bg-red-600 transition-transform transform hover:scale-110 active:scale-95"
              onClick={() => setshowdiv(false)}
            >
              Close
            </button>

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">{title}</h2>
            <p className="text-center text-gray-600 font-medium text-lg">{kcal}</p>

            <div className="flex justify-center gap-4">
              {["breakfast", "lunch", "dinner"].map((mealType) => (
                <button
                  key={mealType}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    newMeal.type === mealType ? "bg-[#4d493f] text-white" : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setNewMeal({ ...newMeal, type: mealType })}
                >
                  {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder={`Add ${newMeal.type} item...`}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4d493f]"
                value={newMeal.item}
                onChange={(e) => setNewMeal({ ...newMeal, item: e.target.value })}
              />
              <button
                className="bg-[#4d493f] text-white px-4 py-2 rounded-lg hover:bg-[#3a372f] transition-all duration-300"
                onClick={addMeal}
              >
                Add
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {Object.keys(meals).map((mealType) => (
                <div key={mealType} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-700">
                    <span role="img" aria-label={mealType}>
                      {mealType === "breakfast" ? "🍳" : mealType === "lunch" ? "🥗" : "🍲"}
                    </span>
                    {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                  </h3>
                  <div className="space-y-2">
                    {meals[mealType].map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-white p-2 rounded-lg border">
                        <p
                          className={`text-gray-700 text-sm ${item.completed ? "line-through text-gray-400" : ""}`}
                        >
                          • {item.name}
                        </p>
                        <div className="flex gap-2">
                          <button
                            className={`px-2 py-1 text-xs font-medium rounded-lg transition ${
                              item.completed ? "bg-green-400 text-white" : "bg-gray-300 text-black"
                            }`}
                            onClick={() => toggleComplete(mealType, index)}
                          >
                            {item.completed ? "✔ Completed" : "Complete"}
                          </button>
                          <button
                            className="px-2 py-1 text-xs bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
                            onClick={() => deleteMeal(mealType, index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {allCompleted && (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center font-bold">
                🎉 Congratulations! You've completed all your meals!
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Diet;
