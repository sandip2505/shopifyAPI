const mongoose = require('mongoose');

  
const shopifyUserSchema = new mongoose.Schema({
    address:{
        address1: {
            type: String,
        },
        address2: {
            type: String,
        },
        city: {
            type: String,
        },
        province: {
            type: String,
        },
        province_code: {
            type: String,
        },
        country: {
            type: String,
        },
        country_code: {
            type: String,
        },
        country_name: {
            type: String,
        },
        zip: {
            type: String,
        },

    },
    customer_email: {
        type: String,
    },
    domain: {
        type: String,
    },
    eligible: {
        type: Boolean,
    },
    email: {
        type: String,
    },
    finances: {
        type: Boolean,
    },
    has_storefront: {
        type: Boolean,
    },
    iana_timezone: {
        type: String,
    },
    shop_id: {
        type: Number,
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
    },
    marketing_sms_consent_enabled_at_checkout: {
        type: Boolean,
    },
    money_formats: {
        money_format: {
            type: String,
        },
        money_in_emails_format: {
            type: String,
        },
        money_with_currency_format: {
            type: String,
        },
        money_with_currency_in_emails_format: {
            type: String,
        },
    },
    multi_location_enabled: {
        type: Boolean,
    },
    myshopify_domain: {
        type: String,
    },
    name: {
        type: String,
    },
    password_enabled: {
        type: Boolean,
    },
    phone: {
        type: String,
    },
    plan: {
        display_name: {
            type: String,
        },
        name: {
            type: String,
        },
    },
    pre_launch_enabled: {
        type: Boolean,
    },
    primary_locale: {
        type: String,
    },
    primary_location_id: {
        type: Number,
    },
    requires_extra_payments_agreement: {
        type: Boolean,
    },
    shop_owner: {
        type: String,
    },
    source: {
        type: String,
    },
    tax_shipping: {
        type: String,
    },
    taxes: {
        type: Boolean,
    },
    timezone: {
        type: String,
    },

    weight_unit: {
        type: String,
    },
    createdAt: { 
        type: Date,
        default: Date.now
    },
    updatedAt: { 
        type: Date,
        default: Date.now
    },
    deletedAt: { 
        type: Date,
        default: null
    },
    })

const ShopifyUser = mongoose.model('User', shopifyUserSchema);

module.exports = ShopifyUser;

