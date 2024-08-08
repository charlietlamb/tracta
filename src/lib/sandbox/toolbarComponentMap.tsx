import CreateToolbarAdd from '@/components/create/toolbar/add/CreateToolbarAdd'
import CreateToolbarOrder from '@/components/create/toolbar/order/CreateToolbarOrder'

// Define the Map with appropriate key-value pairs
const toolbarComponentMap = new Map<ToolbarMode, React.ReactNode>([
  ['add', <CreateToolbarAdd />],
  ['order', <CreateToolbarOrder />],
])

// Export the Map
export default toolbarComponentMap // Define the Map with appropriate key-value pairs
