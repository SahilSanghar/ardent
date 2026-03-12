import React from "react";
import Enable from "../components/ui/Enable";
import Lander from "../components/ui/Lander";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function page() {
  return (
    <>
      <Navbar left={false} right={false} />
      <Lander
        image="/banner/services.png"
        heading1={"Services"}
        css="text-white"
        blurdata="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAARCAYAAADKZhx3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD90lEQVR4nH2V0W+aZRTGm0yslFEQiqVliBURsRPJEJE0RMQmiIiYiXhBGAnO2ixix4INEnESe7HUIHHiFSZ4sV30Ymm86U3/hZk0mf/OPOZ3vn102OnFyQfv937nec55nvO+czabTVwul7jdbrFardOYn3/mUcyfidM98/8Rxrd2u12q1Zrs7+9LIpEQsMz3c0/6yGY7P7PJBCMR64TVuvAojPVTkgYo70KhkJTLn8jh4R8yHo8lHA7rHovl6bPAZgcWFxenIITX65VAIKBP3ttsC2K3L4rL5dY1p9M1BeTJ+ubmpgwGP8mDB3/Jw4d/y3A41BwQnQG2WCzidD4rFy++JsHgS7K8vKwJ3O4lCQaDEo1GZX19XWUxK1xbe1HD43lOPB7PVCavd0X6/b40m01pNBpy//6fGsViUYs6UzGM8vm8pFIprWx1dVVBk8m3pFT6SEqlkkSjryspWklV5XJZfD6fhiHHeX12u10ZjUYSCLwghUJBbt/+RW7e/F42NjZmgWkZJiBRJvOOahGJRCSff18qlU+lUPhA0um3ZXt7W2q1mrTbbcnlckqS/QBQNZ2jKgh3Ot+I3+/Xbh0cHCgwhU2B0TEcfkU3FIsfSiq1oW2GKUSIePwNrRDmw+HPMhr9Krnce0rO57sgodDL2nazaiRhzfDGijSbX8l4/JsWMPe4tuiK82q1ugKiNZVVq1VNvra2JonEm7Kzs6PrVA4RCAIMCb//eQV0Op1Tx+MRs5uQPj4+PgV2OBy6gXYBVK9fUSNcu/alBsAQo7XpdFo1B+jy5Y/1HR26fv2G6o7+JjCVUxT5MeDW1pbs7e2dtprRQBfAs9msDn69XpdOp6MJWYMIcqAnwLFYTH9TNe5Fc8yIpuRjtMyCXC6XVp1MJtWgMxrDDnNgChLSctrZ6/WkWCypNvF4XAk0Gp9JPp9TOaga0FbrhpIB3NB4adoBj8ejcsRil9SgM8DoAUMqJyGnDklv3fpRR2lr6wsFZ585z+hOZ65e/Vx2d3d1H+vsARBdMRcVAw4RyP2rYiMAB5iP4vFLWgmHQbv9tR59/CZ5pVKRwWAg3e630mq11HTMOMRpKw7HrBjSPFzIzbzPAKMJTHFmJPKqmgLW6IsbJ5Pf5d69Qzk5OdGj8OjoSP8DTleYddppHCYX1A/kQR7ycC6YeI8dIMYRCJg5OjDHiZgFTXEjYHfu3JVs9l1t72QyUQ9Uq1e0jaZBjRtvaXq+OxyOmRPyzFltuG9FZ9M0GyOWyWS0dTgYTTEfs067MSOtBxTiS0seBaN7Rh66OXuNPvF24gPjzl1QEhiJGSYpVXLL9HrfSb//g1aLWc6de2p6swFG/N+9/Q94DRFyEv/TXQAAAABJRU5ErkJggg=="
      />

      <div className="relative flex w-full  h-full" id="more">
        <Enable />
      </div>
      <Footer theme="dark" />
    </>
  );
}
