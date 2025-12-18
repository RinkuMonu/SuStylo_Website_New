import ClientPage from "./ClientPage";
import axiosInstance from "../../axios/axiosinstance";

// 🔥 SAFETY FIRST
export async function generateStaticParams() {
  try {
    const res = await axiosInstance.get("/salons");

    const salons = Array.isArray(res?.data?.salons)
      ? res.data.salons
      : [];

   return salons
    .filter(salon => salon && salon._id) // Pehle filter karein ki _id maujood ho
    .map((salon) => ({
      id: salon._id.toString(),
    }));
  } catch (error) {
    console.error("generateStaticParams /salon error:", error);
    return []; // ❗ NEVER throw in static export
  }
}

// 🔥 ASYNC PAGE (Next 15)
export default async function Page({ params }) {
  const { id } = await params;
  return <ClientPage id={id} />;
}
