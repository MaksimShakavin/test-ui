export type Quest = {
 id: string
}
export const getQuestList = async ():Promise<Quest[]> => {
  const res = await fetch(`${process.env.BACKEND_URL}/quest/all/list`);
  return res.json();
}
