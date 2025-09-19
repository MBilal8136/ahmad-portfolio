"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/data/demoData";

interface BlogDetailProps {
  params: {
    id: string;
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  // Get suggested posts (exclude current post)
  const suggestedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-20 pb-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center space-x-2 text-sm text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="hover:text-brand-green transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{post.title}</span>
          </motion.div>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-green hover:text-green-600 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="px-3 py-1 bg-brand-green text-white text-sm rounded-full font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <motion.article
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <div className="text-gray-800 leading-relaxed space-y-6">
                  <p>{post.content}</p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Key Takeaways
                  </h2>

                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Focus on whole, unprocessed foods for optimal nutrition
                    </li>
                    <li>Balance your macronutrients according to your goals</li>
                    <li>Stay hydrated throughout the day</li>
                    <li>Listen to your body's hunger and fullness cues</li>
                    <li>Make sustainable changes for long-term success</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Conclusion
                  </h2>

                  <p>
                    Remember that nutrition is a journey, not a destination.
                    Small, consistent changes can lead to significant
                    improvements in your health and well-being. If you need
                    personalized guidance, don't hesitate to reach out for a
                    consultation.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="sticky top-24 space-y-6">
                {/* Share Buttons */}
                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Share this article
                  </h3>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Facebook
                    </button>
                    <button className="flex-1 bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors">
                      Twitter
                    </button>
                    <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                      LinkedIn
                    </button>
                  </div>
                </Card>

                {/* Author Info */}
                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                      F
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Fiza</p>
                      <p className="text-sm text-gray-600">
                        Certified Nutritionist
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Certified nutritionist with 5+ years of experience helping
                    people achieve their health goals.
                  </p>
                  <Link href="/appointment">
                    <Button size="sm" className="w-full">
                      Book Consultation
                    </Button>
                  </Link>
                </Card>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Suggested Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You Might Also Like
            </h2>
            <p className="text-xl text-gray-600">
              Explore more articles on nutrition and wellness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggestedPosts.map((suggestedPost, index) => (
              <motion.div
                key={suggestedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={suggestedPost.image}
                      alt={suggestedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-brand-green shadow-lg">
                        {suggestedPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {suggestedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {suggestedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>
                        {new Date(suggestedPost.date).toLocaleDateString()}
                      </span>
                      <span>{suggestedPost.readTime}</span>
                    </div>
                    <Link href={`/blog/${suggestedPost.id}`}>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
