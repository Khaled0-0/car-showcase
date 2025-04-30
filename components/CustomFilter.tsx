import React from 'react'

interface CustomFilterProps {
   title: string;
}

const CustomFilter: React.FC<CustomFilterProps> = ({ title }) => {
   return (
      <div>
         {/* You can use the title prop here if needed */}
      </div>
   )
}

export default CustomFilter
