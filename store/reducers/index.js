import { combineReducers } from "redux";
import { authReducers } from "./auth/auth.reducer";
import { eventReducers } from "./events/events.reducer";
import { contactReducers } from "./contact/contact.reducer";
import { messagetemplateReducer } from "./messagetemplate/messagetemplate.reducer";
import { contactCategoryReducers } from "./contactcategory/contactcategory.reducer";
import { dashboardReducers } from "./dashboard/dashboard.reducer";
import { prospectReducers } from "./prospect/prospect.reducer";
import { taskReducers } from "./task/task.reducer";
import { tutorialReducers } from "./tutorial/tutorial.reducer";

export default combineReducers({
    auth: authReducers,
    event: eventReducers,
    contact: contactReducers,
    messagetemplate: messagetemplateReducer,
    contactcategory: contactCategoryReducers,
    dashboard: dashboardReducers,
    prospect: prospectReducers,
    task: taskReducers,
    tutorial: tutorialReducers,
});
