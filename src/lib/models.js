import mongoose from "mongoose";

const sponsorsSchema = new mongoose.Schema({
  imgUrl: String,
});

const featuresSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const logisticSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  iconHovered: String,
  bgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const blogDetailsSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  imgUrls: {
    type: [String],
    required: true,
  },
});

const blogsSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BlogDetails",
  },
});

const testimonalsSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const servicesSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const teamSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  occupation: {
    type: String,
    require: true,
  },
});

const careerOffersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  info: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

const whyChooseUsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
});

const mainServicesSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  subtitle: {
    type: String,
    require: true,
  },
  details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MainServiceDetails",
  },
});

const mainServiceDetailsSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
});

const mainServiceShipping = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MainServiceDetails",
  },
});

export const Logistic =
  mongoose.models?.Logistic || mongoose.model("Logistic", logisticSchema);
export const Sponsors =
  mongoose.models?.Sponsors || mongoose.model("Sponsors", sponsorsSchema);
export const Features =
  mongoose.models?.Features || mongoose.model("Features", featuresSchema);

// -----------------------------------
export const Blogs =
  mongoose.models?.Blogs || mongoose.model("Blogs", blogsSchema);
export const BlogDetails =
  mongoose.models?.BlogDetails ||
  mongoose.model("BlogDetails", blogDetailsSchema);
// -----------------------------------

export const Testimonals =
  mongoose.models?.Testimonals ||
  mongoose.model("Testimonals", testimonalsSchema);
export const Services =
  mongoose.models?.Services || mongoose.model("Services", servicesSchema);
export const Team = mongoose.models?.Team || mongoose.model("Team", teamSchema);
export const CareerOffers =
  mongoose.models?.CareerOffers ||
  mongoose.model("CareerOffers", careerOffersSchema);
export const WhyChooseUs =
  mongoose.models?.WhyChooseUs ||
  mongoose.model("WhyChooseUs", whyChooseUsSchema);

// -----------------------------------
export const MainServices =
  mongoose.models?.MainServices ||
  mongoose.model("MainServices", mainServicesSchema);
export const MainServiceDetails =
  mongoose.models?.MainServiceDetails ||
  mongoose.model("MainServiceDetails", mainServiceDetailsSchema);
export const MainServiceShipping =
  mongoose.models?.MainServiceShipping ||
  mongoose.model("MainServiceShipping", mainServiceShipping);
// -----------------------------------
