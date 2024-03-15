import supabase from "./supabase";

export async function getCabins() {
  //from supabase we made a query with method 'from' which table ('cabin') and row ('all*')
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
