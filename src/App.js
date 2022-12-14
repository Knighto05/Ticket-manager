import Login from "./components/login";
import ListTickets from "./components/tickets/listTickets";
import DetailsTicket from "./components/tickets/detailsTicket";
import CreateTicket from "./components/tickets/createTicket";
import ProtectedRoute from "./protectedRoute";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/tickets" element={<ListTickets />} />
        <Route path="/tickets/create" element={<CreateTicket />} />
        <Route path="/tickets/:id" element={<DetailsTicket />} />
      </Route>
    </Routes>
  );
}

export default App;
