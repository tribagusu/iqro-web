import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { DateTime } from "luxon";

const BlogCard = ({ blog }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blog?.items?.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl overflow-hidden shadow-md relative"
        >
          <Image
            src={`https:${item.fields.thumbnail.fields.file.url}`}
            width={item.fields.thumbnail.fields.file.details.image.width}
            height={item.fields.thumbnail.fields.file.details.image.height}
            alt="foto"
            className="w-full h-56 object-cover"
          />
          <div className="py-4 px-10 flex flex-col lg:h-36">
            <h4 className=" text-lg font-semibold mb-3">{item.fields.title}</h4>
            <div className="flex justify-between">
              <p>{item.fields.author}</p>
              <p>
                {DateTime.fromISO(
                  item?.fields?.created_at.toLocaleString()
                ).toFormat("DD")}
              </p>
            </div>
          </div>
          <div className="flex py-5 md:py-8 px-10 text-darkGreen">
            <Link
              href={`/media/blog/${item.fields.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-300"
            >
              <span className="hover:underline">Read more</span>
              <span className="text-lg scale-x-150">
                <BsArrowRightShort />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
