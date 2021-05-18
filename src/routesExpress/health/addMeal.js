import moment from "moment";
import Meal from "../../data/models/Meal";

// TODO: chua kiem tra input

const addMeal = async ({eatAt, food, patientId, createdBy, updatedBy, tags, note}) => {
  const now = +moment().format('X');
  try {
    await Meal.create({
      updatedAt: now,
      createdAt: now,
      updatedBy,
      createdBy,
      eatAt,
      food,
      patientId,
      tags,
      note
    })
    return true;
  } catch (e) {
    return false;
  }
};

export const updateIndex = async ({updatedBy, mealId, eatAt, food, note}) => {
  const now = +moment().format('X');
  try {
    await Meal.findOneAndUpdate({
      _id: mealId
    }, {
      $set: {
        ...(eatAt && { eatAt }),
        ...(food && { food }),
        ...(note && { note }),
        updatedAt: now,
        updatedBy
      }
    })
    return true;
  } catch (e) {
    return false;
  }
}

export default addMeal;