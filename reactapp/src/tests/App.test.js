import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders_without_crashing", () => {
    render(<App />);
  });

  describe("displays_the_list_of_recipes", () => {
    it("displays_the_first_recipe", () => {
      const { getByText } = render(<App />);
      const recipe1 = getByText("Spaghetti Carbonara");
      expect(recipe1).toBeInTheDocument();
    });
  
    it("displays_the_second_recipe", () => {
      const { getByText } = render(<App />);
      const recipe2 = getByText("Chicken Tacos");
      expect(recipe2).toBeInTheDocument();
    }); 
  
    it("displays_the_third_recipe", () => {
      const { getByText } = render(<App />);
      const recipe3 = getByText("Vegetable Stir-Fry");
      expect(recipe3).toBeInTheDocument();
    });
  
    it("displays_the_fourth_recipe", () => {
      const { getByText } = render(<App />);
      const recipe4 = getByText("Chocolate Chip Cookies");
      expect(recipe4).toBeInTheDocument();
    });
  
    it("displays_the_fifth_recipe", () => {
      const { getByText } = render(<App />);
      const recipe5 = getByText("Mango Smoothie");
      expect(recipe5).toBeInTheDocument();
    });
  });
  describe("displays 'Save to Collection' button for the list of recipes", () => {
    it("displays_save_to_collection_button_for_spaghetti_carbonara", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Spaghetti Carbonara");
      
      fireEvent.click(recipe);
      
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
    });
    
    it("displays_save_to_collection_button_for_chicken_tacos", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Chicken Tacos");
      
      fireEvent.click(recipe);
      
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
    });
    
    it("displays_save_to_collection_button_for_vegetable_stir_fry", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Vegetable Stir-Fry");
      
      fireEvent.click(recipe);
      
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
    })
    
    it("displays_save_to_collection_button_for_chocolate_chip_cookies", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Chocolate Chip Cookies");
      
      fireEvent.click(recipe);
      
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
    });
    
    it("displays_save_to_collection_button_for_mango_smoothie", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Mango Smoothie");
      
      fireEvent.click(recipe);
      
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
    });
    
  
  });
  
  describe("displays detailed info for the list of recipes", () => {
    it("displays_detailed_info_for_spaghetti_carbonara", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Spaghetti Carbonara");
      
      fireEvent.click(recipe);
      
      const description = getByText("A classic Italian pasta dish with creamy egg sauce.");
      const preparationTime = getByText("Preparation Time: 20 minutes");
      const servingSize = getByText("Serving Size: 2");
      
      expect(description).toBeInTheDocument();
      expect(preparationTime).toBeInTheDocument();
      expect(servingSize).toBeInTheDocument();
    });
    
    it("displays_detailed_info_for_chicken_tacos", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Chicken Tacos");
      
      fireEvent.click(recipe);
      
      const description = getByText("Delicious tacos filled with seasoned chicken and veggies.");
      const preparationTime = getByText("Preparation Time: 30 minutes");
      const servingSize = getByText("Serving Size: 4");
      
      expect(description).toBeInTheDocument();
      expect(preparationTime).toBeInTheDocument();
      expect(servingSize).toBeInTheDocument();
    });
    
    it("displays_detailed_info_for_vegetable_stir_fry", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Vegetable Stir-Fry");
      
      fireEvent.click(recipe);
      
      const description = getByText("A healthy and colorful stir-fry with assorted vegetables.");
      const preparationTime = getByText("Preparation Time: 25 minutes");
      const servingSize = getByText("Serving Size: 3");
      
      expect(description).toBeInTheDocument();
      expect(preparationTime).toBeInTheDocument();
      expect(servingSize).toBeInTheDocument();
    });
    
    it("displays_detailed_info_for_chocolate_chip_cookies", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Chocolate Chip Cookies");
      
      fireEvent.click(recipe);
      
      const description = getByText("Classic homemade cookies with gooey chocolate chips.");
      const preparationTime = getByText("Preparation Time: 15 minutes");
      const servingSize = getByText("Serving Size: 12");
      
      expect(description).toBeInTheDocument();
      expect(preparationTime).toBeInTheDocument();
      expect(servingSize).toBeInTheDocument();
    });
    
    it("displays_detailed_info_for_mango_smoothie", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Mango Smoothie");
      
      fireEvent.click(recipe);
      
      const description = getByText("Refreshing smoothie with fresh mangoes and yogurt.");
      const preparationTime = getByText("Preparation Time: 10 minutes");
      const servingSize = getByText("Serving Size: 2");
      
      expect(description).toBeInTheDocument();
      expect(preparationTime).toBeInTheDocument();
      expect(servingSize).toBeInTheDocument();
    });
    
  });
  describe("displays delete button during the on click of 'Save to Collection' button for the list of recipes", () => {
    it("displays_delete_button_for_spaghetti_carbonara", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Spaghetti Carbonara");
      
      fireEvent.click(recipe);
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
      fireEvent.click(saveButton);
      const deleteButton = getByText("Delete");
      expect(deleteButton).toBeInTheDocument();
    });
    
    it("displays_delete_button_for_chicken_tacos", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Chicken Tacos");
      
      fireEvent.click(recipe);
      
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
      fireEvent.click(saveButton);
      const deleteButton = getByText("Delete");
      expect(deleteButton).toBeInTheDocument();
    });
    
    it("displays_delete_button_for_vegetable_stir_fry", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Vegetable Stir-Fry");
      
      fireEvent.click(recipe);
      
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
      fireEvent.click(saveButton);
      const deleteButton = getByText("Delete");
      expect(deleteButton).toBeInTheDocument();
    });
    
    it("displays_delete_button_for_chocolate_chip_cookies", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Chocolate Chip Cookies");
      
      fireEvent.click(recipe);
      
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
      fireEvent.click(saveButton);
      const deleteButton = getByText("Delete");
      expect(deleteButton).toBeInTheDocument();
    });
    
    it("displays_delete_button_for_mango_smoothie", () => {
      const { getByText } = render(<App />);
      const recipe = getByText("Mango Smoothie");
      
      fireEvent.click(recipe);
      
      const saveButton = getByText("Save to Collection");
      expect(saveButton).toBeInTheDocument();
      fireEvent.click(saveButton);
      const deleteButton = getByText("Delete");
      expect(deleteButton).toBeInTheDocument();
    });
    
  
  });

  

describe("displays 'Recipe saved in collection' for all recipes", () => {
  it("displays_recipe_saved_in_collection_for_spaghetti_carbonara", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Spaghetti Carbonara");
    fireEvent.click(recipe);
  
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
  
    fireEvent.click(saveButton);
  
    // After clicking, "Save to Collection" should not be present
  
    const savedText = getByText("Recipe saved in collection.");
    expect(savedText).toBeInTheDocument();
  });
  
  it("displays_recipe_saved_in_collection_for_chicken_tacos", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Chicken Tacos");
    fireEvent.click(recipe);
  
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
  
    fireEvent.click(saveButton);
  
    // After clicking, "Save to Collection" should not be present
  
    const savedText = getByText("Recipe saved in collection.");
    expect(savedText).toBeInTheDocument();
  });
  
  it("displays_recipe_saved_in_collection_for_vegetable_stir_fry", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Vegetable Stir-Fry");
    fireEvent.click(recipe);
  
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
  
    fireEvent.click(saveButton);
  
    // After clicking, "Save to Collection" should not be present
  
    const savedText = getByText("Recipe saved in collection.");
    expect(savedText).toBeInTheDocument();
  });
  
  it("displays_recipe_saved_in_collection_for_chocolate_chip_cookies", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Chocolate Chip Cookies");
    fireEvent.click(recipe);
  
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
  
    fireEvent.click(saveButton);
  
    // After clicking, "Save to Collection" should not be present
  
    const savedText = getByText("Recipe saved in collection.");
    expect(savedText).toBeInTheDocument();
  });
  
  it("displays_recipe_saved_in_collection_for_mango_smoothie", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Mango Smoothie");
    fireEvent.click(recipe);
  
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
  
    fireEvent.click(saveButton);
  
    // After clicking, "Save to Collection" should not be present
  
    const savedText = getByText("Recipe saved in collection.");
    expect(savedText).toBeInTheDocument();
  });
  
});

describe("displays 'Save to Collection' button for all recipes while clicking delete", () => {
  it("displays_save_to_collection_button_for_spaghetti_carbonara", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Spaghetti Carbonara");
    
    fireEvent.click(recipe);
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
    
    fireEvent.click(saveButton);
    const deleteButton = getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  
    fireEvent.click(deleteButton);
    const saveToCollectionButton = getByText("Save to Collection");
    expect(saveToCollectionButton).toBeInTheDocument();
    expect(deleteButton).not.toBeInTheDocument();
  });
  
  it("displays_save_to_collection_button_for_chicken_tacos", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Chicken Tacos");
    
    fireEvent.click(recipe);
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
    
    fireEvent.click(saveButton);
    const deleteButton = getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  
    fireEvent.click(deleteButton);
    const saveToCollectionButton = getByText("Save to Collection");
    expect(saveToCollectionButton).toBeInTheDocument();
    expect(deleteButton).not.toBeInTheDocument();
  });
  
  it("displays_save_to_collection_button_for_vegetable_stir_fry", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Vegetable Stir-Fry");
    
    fireEvent.click(recipe);
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
    
    fireEvent.click(saveButton);
    const deleteButton = getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  
    fireEvent.click(deleteButton);
    const saveToCollectionButton = getByText("Save to Collection");
    expect(saveToCollectionButton).toBeInTheDocument();
    expect(deleteButton).not.toBeInTheDocument();
  });
  
  it("displays_save_to_collection_button_for_chocolate_chip_cookies", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Chocolate Chip Cookies");
    
    fireEvent.click(recipe);
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
    
    fireEvent.click(saveButton);
    const deleteButton = getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  
    fireEvent.click(deleteButton);
    const saveToCollectionButton = getByText("Save to Collection");
    expect(saveToCollectionButton).toBeInTheDocument();
    expect(deleteButton).not.toBeInTheDocument();
  });
  
  it("displays_save_to_collection_button_for_mango_smoothie", () => {
    const { getByText } = render(<App />);
    const recipe = getByText("Mango Smoothie");
    
    fireEvent.click(recipe);
    const saveButton = getByText("Save to Collection");
    expect(saveButton).toBeInTheDocument();
    
    fireEvent.click(saveButton);
    const deleteButton = getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  
    fireEvent.click(deleteButton);
    const saveToCollectionButton = getByText("Save to Collection");
    expect(saveToCollectionButton).toBeInTheDocument();
    expect(deleteButton).not.toBeInTheDocument();
  });
  
});
});
