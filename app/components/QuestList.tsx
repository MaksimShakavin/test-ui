import {getQuestList} from "@/app/api/api";

export const QuestList = async () => {
  const quests = await getQuestList();
  console.log(quests);
  return (<ul>
    {quests.map(quest => (<li>{quest.id}</li>))}
  </ul>);
}
