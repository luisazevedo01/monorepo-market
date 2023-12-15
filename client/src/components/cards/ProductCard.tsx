import Image from "next/image";

type TProductCardProps = {
    img: string;
    title: string;
    price: string;
}

export const ProductCard = (props: TProductCardProps) => {
    return (
        <div className="p-10 ">
            <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg w-72 h-72">
                <Image width={208} height={208} src={props.img} alt="" className="rounded-t-lg h-52 mx-auto" />
                <div className="p-6 flex justify-between">
                    <h3 className="font-bold mb-2 text-2xl">{props.title}</h3>
                    <h3 className="font-bold mb-2 text-2xl">{props.price}€</h3>
                </div>

            </div>
        </div>

    )
}