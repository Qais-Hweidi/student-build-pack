import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// TypeScript interface for service provider seed data
interface ServiceProviderSeedData {
  companyName: string;
  logoUrl?: string;
  description: string;
  websiteUrl: string;
  offerDetails: string;
}

// TypeScript interface for site configuration seed data
interface SiteConfigurationSeedData {
  profileImageUrl?: string;
}

// Test service provider data - 5 diverse offerings
const serviceProvidersData: ServiceProviderSeedData[] = [
  {
    companyName: 'GitHub',
    logoUrl:
      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    description:
      "World's leading software development platform with Git repository hosting, code review, and collaboration tools.",
    websiteUrl: 'https://github.com',
    offerDetails: "Free GitHub Pro account while you're a student.",
  },
  {
    companyName: 'JetBrains',
    logoUrl:
      'https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png',
    description:
      'Professional development tools and IDEs for various programming languages including IntelliJ IDEA, PyCharm, and WebStorm.',
    websiteUrl: 'https://www.jetbrains.com',
    offerDetails: "Free access to all JetBrains IDEs while you're a student.",
  },
  {
    companyName: 'Amazon Web Services',
    logoUrl:
      'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
    description:
      'Comprehensive cloud computing platform offering infrastructure, platform, and software services.',
    websiteUrl: 'https://aws.amazon.com',
    offerDetails: '$100 in AWS credits for students.',
  },
  {
    companyName: 'Figma',
    logoUrl:
      'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png',
    description:
      'Collaborative interface design tool for creating user interfaces, prototypes, and design systems.',
    websiteUrl: 'https://www.figma.com',
    offerDetails: 'Free Figma Professional plan for students.',
  },
  {
    companyName: 'Vercel',
    logoUrl:
      'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
    description:
      'Frontend cloud platform for deploying and hosting modern web applications with automatic CI/CD and global CDN.',
    websiteUrl: 'https://vercel.com',
    offerDetails: 'Free Pro plan for students.',
  },
];

// Site configuration defaults
const siteConfigurationData: SiteConfigurationSeedData = {
  profileImageUrl: 'https://github.com/Qais-Hweidi.png', // Default GitHub profile image
};

async function main() {
  console.log('Starting database seeding...');

  try {
    // Clear existing data (optional - for development/testing)
    console.log('Clearing existing data...');
    await prisma.serviceProvider.deleteMany({});
    await prisma.siteConfiguration.deleteMany({});

    // Seed service providers
    console.log('Seeding service providers...');
    const serviceProviders = await Promise.all(
      serviceProvidersData.map(async provider => {
        return prisma.serviceProvider.create({
          data: provider,
        });
      })
    );

    console.log(`Created ${serviceProviders.length} service providers`);

    // Seed site configuration
    console.log('Seeding site configuration...');
    const siteConfig = await prisma.siteConfiguration.create({
      data: siteConfigurationData,
    });

    console.log('Created site configuration');

    // Verification: count records
    const serviceProviderCount = await prisma.serviceProvider.count();
    const siteConfigCount = await prisma.siteConfiguration.count();

    console.log('\nSeeding Summary:');
    console.log(`• Service Providers: ${serviceProviderCount}`);
    console.log(`• Site Configurations: ${siteConfigCount}`);
    console.log('\nDatabase seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  }
}

main()
  .catch(e => {
    console.error('Fatal error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
