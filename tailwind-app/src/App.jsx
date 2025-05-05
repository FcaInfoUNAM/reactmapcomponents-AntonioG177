import './App.css'
import Card from './Card'

function App() {
  
  const products = [
    {
      name: "Electronic Frozen Soap",
      model: "978-1-894542-44-9",
      hexColor: "#494719",
      b64Image: "https://picsum.photos/seed/5htb27xeX/640/480",
      properties: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    },
    {
      name: "Unbranded Fresh Shoes",
      model: "978-1-905099-69-6",
      b64Image: "https://picsum.photos/seed/ozuQiMyzNK/640/480",
      properties: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    },
    {
      name: "Modern Granite Towels",
      model: "978-0-260-37094-5",
      b64Image: "https://picsum.photos/seed/R2VuLA/640/480",
      properties: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    },
    {
      name: "Luxurious Fresh Car",
      model: "978-0-448-40650-3",
      b64Image: "https://picsum.photos/seed/TkJvL/640/480",
      properties: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    },
    {
      name: "Modern Rubber Chair",
      model: "978-1-7904-2553-2",
      b64Image: "https://picsum.photos/seed/rDWbwgbgDz/640/480",
      properties: "The Football Is Good For Training And Recreational Purposes",
    },
    {
      name: "Sleek Cotton Tuna",
      model: "978-1-184-04781-4",
      b64Image: "https://picsum.photos/seed/otI5DVDz/640/480",
      properties: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    },
    {
      name: "Licensed Granite Ball",
      model: "978-1-74218-429-6",
      b64Image: "https://picsum.photos/seed/1fujI/640/480",
      properties: "The Football Is Good For Training And Recreational Purposes",
    },
    {
      name: "Intelligent Metal Pants",
      model: "978-1-84836-342-7",
      b64Image: "https://picsum.photos/seed/Y5knt1/640/480",
      properties: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    }];
  return (
    <>
    <div className="bg-orange-500 p-8 grid grid-cols-4 gap-4">
      <div>
      <Card image="https://cdn1.coppel.com/images/catalog/mkp/7312/3000/73121886-1.jpg?iresize=width:400,height:320" title="PC Gamer" paragraph="Computadora PRIDE GAMING LEOPARD / RADEON RX 9070 XT / AMD RYZEN 7 9700X / 32GB RAM / 2TB SSD M.2 NVMe / ENF. LIQ. 360MM / 850W 80+ GOLD / INCLUYE WIFI y BLUETOOTH" 
      productRef="https://ddtech.mx/producto/computadora-pride-gaming-leopard-radeon-rx-9070-xt-amd-ryzen-7-9700x-32gb-ram-2tb-ssd-m-2-nvme-enf-liq-360mm-850w-80-gold-incluye-wifi-y-bluetooth?id=17097" />
      </div>
    </div>

    {products.map(e=>
    <div className="bg-orange-500 p-8 grid grid-cols-4 gap-4">
      <div>
      <Card image={e.b64Image} title={e.name} paragraph={e.model + " " + e.properties} />
      </div>
    </div>
    )}
    </>
  )
}

export default App