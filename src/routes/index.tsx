import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { ServiceOptions } from "../pages/ServiceOptions";
import { PaymentOptions } from "../pages/PaymentOptions";
import { Menu } from "../pages/Menu";
import { MontarPedido } from "../pages/MontarPedido";
import { NotFound404 } from "../pages/NotFound404";

export function AcaiPlusRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/services" element={ <ServiceOptions /> } />
        <Route path="/payment" element={ <PaymentOptions /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/pedido?" element={ <MontarPedido /> } />
        <Route path="/*" element={ <NotFound404 /> } />
      </Routes>
    </BrowserRouter>
  )
}