import {
  BlogDetails,
  Blogs,
  CareerOffers,
  Features,
  Logistic,
  MainServiceDetails,
  MainServiceShipping,
  MainServices,
  Services,
  Sponsors,
  Team,
  Testimonals,
  WhyChooseUs,
} from "./models";
import { connectToDb } from "./utils";

export const getSponsors = async () => {
  try {
    await connectToDb();

    const sponsors = await Sponsors.find();
    return sponsors;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Sponsors");
  }
};

export const getFeatures = async () => {
  try {
    await connectToDb();

    const features = await Features.find();
    return features;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Features");
  }
};

export const getLogistic = async () => {
  try {
    await connectToDb();

    const logistic = await Logistic.find();
    return logistic;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Logistic");
  }
};

export const getBlogs = async (limit) => {
  try {
    await connectToDb();

    let blogs = Blogs.find();
    if (limit) {
      blogs = blogs.limit(limit);
    }
    return blogs;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Blogs");
  }
};

export const getBlogDetails = async (blogId) => {
  try {
    await connectToDb();

    const blog = await Blogs.findById(blogId);
    const detailsId = blog.details;
    const blogDetails = await BlogDetails.findById(detailsId);
    return blogDetails;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch blog details");
  }
};

export const getBlog = async (id) => {
  try {
    await connectToDb();

    const blog = await Blogs.findById(id);
    return blog;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch the Blog");
  }
};

export const getTestimonals = async () => {
  try {
    await connectToDb();

    const testimonals = await Testimonals.find();
    return testimonals;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Testimonals");
  }
};

export const getServices = async () => {
  try {
    await connectToDb();

    const services = await Services.find();
    return services;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Services");
  }
};

export const getTeam = async () => {
  try {
    await connectToDb();

    const team = await Team.find();
    return team;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Team");
  }
};

export const getCareerOffers = async () => {
  try {
    await connectToDb();

    const careerOffers = await CareerOffers.find();
    return careerOffers;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Career Offers");
  }
};

export const getWhyChooseUs = async () => {
  try {
    await connectToDb();

    const whyChooseUs = await WhyChooseUs.find();
    return whyChooseUs;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Why Choose Us");
  }
};

export const getMainServices = async () => {
  try {
    await connectToDb();

    const mainServices = await MainServices.find();
    return mainServices;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Main Services");
  }
};

export const getMainServiceDetails = async (serviceId) => {
  try {
    await connectToDb();

    const service = await MainServices.findById(serviceId);
    const detailsId = service.details;
    const serviceDetails = await MainServiceDetails.findById(detailsId);

    return serviceDetails;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Main Services Details");
  }
};

export const getMainServiceShipping = async (serviceId) => {
  try {
    await connectToDb();

    const service = await MainServices.findById(serviceId);
    const detailsId = service.details;

    const mainServiceShippings = await MainServiceShipping.find({
      service: detailsId,
    });
    return mainServiceShippings;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Main Services Details");
  }
};
