import axios from "axios";
import React, { useEffect, useState } from "react";
import CommonHeader from "../commonHeader/CommonHeader";

const AddProduct = () => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    quantity: "",
    status: "",
    featured_image: "",
    category_id: "",
    sub_category_id: "",
    brand_name: "",
    prices: [
      {
        color_name: "",
        size_name: "",
        old_price: "",
        sale_price: "",
        images: [],
        specifications: [{ spec_key: "", spec_value: "" }],
        configuration: [{ size: "", old_price: "", sale_price: "", stock: "" }],
      },
    ],
  });

  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const baseURL = process.env.REACT_APP_API_BASE_URL;

  // Fetch all categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/categories/getallcategory`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
    window.scrollTo(0, 0);
  }, []);

  // Fetch subcategories when a category is selected
  const handleCategoryChange = async (e) => {
    const categoryId = e.target.value;
    setProductData({ ...productData, category_id: categoryId });

    try {
      setIsLoading(true);
      const response = await axios.get(
        `${baseURL}/getSubCatgoryBy/${categoryId}`
      );
      setSubCategories(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // handle status of visibilty
  const handleStatusChange = (event) => {
    setProductData({ ...productData, status: event.target.value });
  };
  // Handle subcategory change
  const handleSubCategoryChange = (e) => {
    setProductData({ ...productData, sub_category_id: e.target.value });
  };

  // Handle form data input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // Handle changes in price details
  const handlePriceChange = (index, e) => {
    const { name, value } = e.target;
    const prices = [...productData.prices];
    prices[index][name] = value;
    setProductData({ ...productData, prices });
  };

  // Handle specification changes
  const handleSpecificationChange = (priceIndex, specIndex, e) => {
    const { name, value } = e.target;
    const prices = [...productData.prices];
    prices[priceIndex].specifications[specIndex][name] = value;
    setProductData({ ...productData, prices });
  };

  // Handle configuration changes
  const handleConfigurationChange = (priceIndex, configIndex, e) => {
    const { name, value } = e.target;
    const prices = [...productData.prices];
    prices[priceIndex].configuration[configIndex][name] = value;
    setProductData({ ...productData, prices });
  };

  // Add a new price entry
  const handleAddPrice = () => {
    setProductData({
      ...productData,
      prices: [
        ...productData.prices,
        {
          color_name: "",
          size_name: "",
          old_price: "",
          sale_price: "",
          images: [],
          specifications: [{ spec_key: "", spec_value: "" }],
          configuration: [
            { size: "", old_price: "", sale_price: "", stock: "" },
          ],
        },
      ],
    });
  };

  // Add a new specification to a price entry
  const handleAddSpecification = (index) => {
    const prices = [...productData.prices];
    prices[index].specifications.push({ spec_key: "", spec_value: "" });
    setProductData({ ...productData, prices });
  };

  // Add a new configuration to a price entry
  const handleAddConfiguration = (index) => {
    const prices = [...productData.prices];
    prices[index].configuration.push({
      size: "",
      old_price: "",
      sale_price: "",
      stock: "",
    });
    setProductData({ ...productData, prices });
  };

  // Add a new image to a price entry
  const handleAddImage = (priceIndex) => {
    const prices = [...productData.prices];
    prices[priceIndex].images.push(null); // Placeholder for the new image
    setProductData({ ...productData, prices });
  };

  // Handle image changes
  const handleImageChange = (priceIndex, imgIndex, e) => {
    const file = e.target.files[0]; // Only handle the first file

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result; // This is the base64 encoded image string
        const prices = [...productData.prices];
        prices[priceIndex].images[imgIndex] = base64String; // Store base64 string instead of file
        setProductData({ ...productData, prices });
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("the productData is ", productData);
    // Add product to API
    try {
      const formData = new FormData();
      for (const key in productData) {
        if (key === "prices") {
          formData.append(key, JSON.stringify(productData[key]));
        } else {
          formData.append(key, productData[key]);
        }
      }

      const response = await axios.post(
        `${baseURL}/product/add/${userId}`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setMessage("Product added successfully!");
    } catch (error) {
      console.error("Error in adding product", error);
    }

    alert("Product data submitted");
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-4">
        <CommonHeader name={"Add Product"} />
        {message && <p className="text-green-500 mb-2">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={productData.name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={productData.description}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
          <input
            type="text"
            name="quantity"
            placeholder=" Total Product Quantity"
            value={productData.quantity}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
          <div>
            <p className="pb-2">Visibility of the product</p>
            <div className="w-full border border-gray-300 rounded p-2">
              <label className="mr-4">
                <input
                  type="radio"
                  name="status"
                  value="show"
                  checked={productData.status === "show"}
                  onChange={handleStatusChange}
                  className="mr-2"
                />
                Show Product
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="hide"
                  checked={productData.status === "hide"}
                  onChange={handleStatusChange}
                  className="mr-2"
                />
                Hide Product
              </label>
            </div>
          </div>

          {/* image input */}
          <input
            type="file"
            name="featured_image"
            onChange={(e) => {
              const file = e.target.files[0];

              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setProductData({
                    ...productData,
                    featured_image: reader.result, // base64 string
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
            className="w-full border border-gray-300 rounded p-2"
          />

          <label>Category:</label>
          <select
            name="category_id"
            value={productData.category_id}
            onChange={handleCategoryChange}
            required
            className="w-[200px] border border-gray-300 rounded p-2 "
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          {/* Subcategory Dropdown */}
          <label className="lg:pl-5">Subcategory:</label>
          <select
            name="sub_category_id"
            value={productData.sub_category_id}
            onChange={handleSubCategoryChange}
            required
            className="w-[200px] border border-gray-300 rounded p-2 "
            disabled={isLoading || !subCategories.length}
          >
            <option value="">Select Subcategory</option>
            {subCategories.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.id}>
                {subCategory.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="brand_name"
            placeholder="Brand Name"
            value={productData.brand_name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />

          <h2 className="text-xl font-semibold mt-6">Prices</h2>
          {productData.prices.map((price, priceIndex) => (
            <div key={priceIndex} className="border border-gray-200 p-4">
              <input
                type="text"
                name="color_name"
                placeholder="Color"
                value={price.color_name}
                onChange={(e) => handlePriceChange(priceIndex, e)}
                required
                className="w-full border border-gray-300 rounded p-2 mb-2"
              />
              {/* <input
                type="text"
                name="size_name"
                placeholder="Size"
                value={price.size_name}
                onChange={(e) => handlePriceChange(priceIndex, e)}
                className="w-full border border-gray-300 rounded p-2 mb-2"
              /> */}
              {/* <input
                type="number"
                name="old_price"
                placeholder="Old Price"
                value={price.old_price}
                onChange={(e) => handlePriceChange(priceIndex, e)}
                className="w-full border border-gray-300 rounded p-2 mb-2"
              /> */}
              {/* <input
                type="number"
                name="sale_price"
                placeholder="Sale Price"
                value={price.sale_price}
                onChange={(e) => handlePriceChange(priceIndex, e)}
                className="w-full border border-gray-300 rounded p-2 mb-2"
              /> */}

              <h3 className="font-semibold mt-2">Images</h3>
              {price.images.map((img, imgIndex) => (
                <div key={imgIndex} className="mb-2">
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(priceIndex, imgIndex, e)}
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddImage(priceIndex)}
                className="text-blue-500"
              >
                Add More Images
              </button>

              {/* <h3 className="font-semibold mt-4">Specifications</h3> */}
              {/* {price.specifications.map((spec, specIndex) => (
                <div key={specIndex} className="mb-2">
                  <input
                    type="text"
                    name="spec_key"
                    placeholder="Specification Key"
                    value={spec.spec_key}
                    onChange={(e) =>
                      handleSpecificationChange(priceIndex, specIndex, e)
                    }
                    className="w-full border border-gray-300 rounded p-2 mb-2"
                  />
                  <input
                    type="text"
                    name="spec_value"
                    placeholder="Specification Value"
                    value={spec.spec_value}
                    onChange={(e) =>
                      handleSpecificationChange(priceIndex, specIndex, e)
                    }
                    className="w-full border border-gray-300 rounded p-2 mb-2"
                  />
                </div>
              ))} */}
              {/* <button
                type="button"
                onClick={() => handleAddSpecification(priceIndex)}
                className="text-blue-500"
              >
                Add More Specifications
              </button> */}

              <h3 className="font-semibold mt-4">Configurations</h3>
              {price.configuration.map((config, configIndex) => (
                <div
                  key={configIndex}
                  className="mb-2 border-black-800  border-b-2"
                >
                  <input
                    type="text"
                    name="size"
                    placeholder="Size:M,L,XL, ( 6+128 ) "
                    value={config.size}
                    onChange={(e) =>
                      handleConfigurationChange(priceIndex, configIndex, e)
                    }
                    required
                    className="w-full border border-gray-300 rounded p-2 mb-2"
                  />
                  <input
                    type="text"
                    name="old_price"
                    placeholder="Old Price"
                    value={config.old_price}
                    onChange={(e) =>
                      handleConfigurationChange(priceIndex, configIndex, e)
                    }
                    required
                    className="w-full border border-gray-300 rounded p-2 mb-2"
                  />
                  <input
                    type="text"
                    name="sale_price"
                    placeholder="Sale Price"
                    value={config.sale_price}
                    onChange={(e) =>
                      handleConfigurationChange(priceIndex, configIndex, e)
                    }
                    required
                    className="w-full border border-gray-300 rounded p-2 mb-2"
                  />
                  <input
                    type="text"
                    name="stock"
                    placeholder="Quantity"
                    value={config.stock}
                    onChange={(e) =>
                      handleConfigurationChange(priceIndex, configIndex, e)
                    }
                    required
                    className="w-full border border-gray-300 rounded p-2 mb-2"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddConfiguration(priceIndex)}
                className="text-blue-500"
              >
                Add More Configurations
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddPrice}
            className="text-blue-500"
          >
            Add More Price Options
          </button>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mt-4"
          >
            Submit Product
          </button>
        </form>
      </div>
    </>
  );
};
export default AddProduct;