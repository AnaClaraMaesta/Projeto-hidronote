import ClienteListar from "./clientesListar"

export default function index(){

    return(
        <>
            <div className="App h-screen w-screen">
                <header className="App-header flex flex-col bg-[#6f6fff] justify-content">
                    <div className="mx-auto my-4 flex items-center justify-between px-5 w-full">
                        <h1 className="text-3xl font-semibold">Sistema de gerenciamento</h1>
{/*                         <p className="font-light text-center">Sistema de gerenciamento hidronorte e irmaos volpato</p>*/}
                    </div>

                    <div className="py-4 px-4">
                        <img loading="lazy" src="https://placehold.co/200x100" 
                        className="rounded-xl shadow-lg ring-2 ring-white/20 backdrop-blur object-contain"></img>
                    </div>

                </header>
                <ClienteListar />
            </div>
        </>
    )
}