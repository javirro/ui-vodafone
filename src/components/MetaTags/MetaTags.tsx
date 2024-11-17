import { Helmet } from 'react-helmet'

interface MetaTagsProps {
  title: string
}
const MetaTags = ({ title }: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default MetaTags