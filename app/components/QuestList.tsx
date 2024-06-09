import {getQuestList} from "@/app/api/api";

export const QuestList = async () => {
  const quests = await getQuestList();
  console.log(quests);
  return (<ul>
    {quests.map(((quest, id) => (<li key={id}>{quest.id}</li>)))}
  </ul>);
}
