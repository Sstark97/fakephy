import Content from "./Content";

const ContentList = ({content}: any) => {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-3 h-full overflow-y-auto justify-center py-10 xl:scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        {content.map((item: any) => (
            <Content key={item.id} src={item.images.downsized.url} alt={item.title} />
        ))}
    </ul>
  )
}

export default ContentList;