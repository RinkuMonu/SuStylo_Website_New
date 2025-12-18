import ClientPage from "./ClientPage";
import axiosInstance from "../../axios/axiosinstance";

export async function generateStaticParams() {
  const res = await axiosInstance.get("/freelancer");

  return res.data.freelancers.map((item) => ({
    id: item._id.toString(),
  }));
}

// 🔥 ASYNC PAGE
export default async function Page({ params }) {
  const { id } = await params; // ✅ IMPORTANT FIX
  return <ClientPage id={id} />;
}
