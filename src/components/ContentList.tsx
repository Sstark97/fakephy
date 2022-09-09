const ContentList = ({content}: any) => {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-3 h-full overflow-y-auto justify-center">
        {content.map((item: any) => (
            <li className="basis-1/3 h-1/4 w-full" key={item.id}>
                <img className="h-full object-cover" src={item.images.original.url} alt={item.title} loading="lazy"/>
            </li>
        ))}
    </ul>
  )
}

export default ContentList;