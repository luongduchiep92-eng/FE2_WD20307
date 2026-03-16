import { Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Category {
  id: number;
  title: string;
}

function CategorySelect() {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get<Category[]>(
        "http://localhost:3000/categories"
      );
      return data;
    },
  });

  return (
    <Select
      placeholder="Chọn danh mục"
      options={data?.map((item) => ({
        label: item.title,
        value: item.id,
      }))}
    />
  );
}

export default CategorySelect;