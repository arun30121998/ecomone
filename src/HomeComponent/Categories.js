import { Categories } from "../component/DummyApi";

export default function Categorie() {
    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                <h1 className='text-center'>categories</h1>
                <p className='text-center mb-10'>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>

                <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    {Categories.map((category) => (
                        <a
                            key={category.id}
                            href={category.href}
                            className='group'
                        >
                            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                                <img
                                    src={category.imageSrc}
                                    alt={category.imageAlt}
                                    className='h-80 w-full object-cover object-center group-hover:opacity-75'
                                />
                            </div>
                            <h3 className='mt-4 text-lg text-gray-900'>
                                {category.name} <span className='text-sm ml-4 px-2 bg-red-500 text-white rounded-lg border-0'>{category.item}</span>
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
