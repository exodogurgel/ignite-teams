import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION } from "@storage/storageConfig"
import { AppError } from "@utils/AppError"
import { groupsGetAll } from "./groupsGetAll"

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll()

    const groupAlreadyExistis = storedGroups.includes(newGroup)

    if (groupAlreadyExistis) {
      throw new AppError("Já existe um grupo cadastrado com esse nome")
    }

    const storage = JSON.stringify([...storedGroups, newGroup.trim()])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
    
  } catch(error) {
    throw error
  }
}