import Image from 'next/image'

export default function MyImage() {
    return (
      <div>
      <h1>Displaying Image and Video in Next.js</h1>

      {/* Displaying an Image */}
      <h2>Image</h2>
      <Image
        src="/images/office.jpg"
        alt="My Image"
        width={300}
        height={150}
      />
    </div>
    )
  }