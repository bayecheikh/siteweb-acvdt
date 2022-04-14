<template>
    <div class="shop-page-wrapper">
        <TheHeader />
        <Breadcrumb pageTitle="Mon compte" />
        
        <div class="my-account-area pb-80 pt-100">
            <div class="container">
                <div class="row">
                    <div class="ms-auto me-auto col-lg-9">
                        <div class="my-account-wrapper">
                            <div id="faq" class="panel-group">
                                <div class="panel panel-default single-my-account">
                                    <div class="panel-heading my-account-title">
                                        <h3 class="panel-title"><span>1 .</span> <a data-bs-toggle="collapse" href="#my-account-1">Modifiez vos infos personnelles</a></h3>
                                    </div>
                                    <div id="my-account-1" class="panel-collapse collapse show" data-bs-parent="#faq">
                                        <div class="panel-body">
                                            <div class="myaccount-info-wrapper">
                                                <!-- <div class="account-info-wrapper">
                                                    <h4>My Account Information</h4>
                                                    <h5>Your Personal Details</h5>
                                                </div> -->
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="billing-info">
                                                            <label>Prénom</label>
                                                            <input type="text">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="billing-info">
                                                            <label>Nom</label>
                                                            <input type="text">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="billing-info">
                                                            <label>Email</label>
                                                            <input type="email">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="billing-info">
                                                            <label>Téléphone</label>
                                                            <input type="text">
                                                        </div>
                                                    </div>
                                                    <!-- <div class="col-lg-6 col-md-6">
                                                        <div class="billing-info">
                                                            <label>Fax</label>
                                                            <input type="text">
                                                        </div>
                                                    </div> -->
                                                </div>
                                                <div class="billing-back-btn">
                                                    <!-- <div class="billing-back">
                                                        <a href="#"><i class="fa fa-arrow-up"></i> back</a>
                                                    </div> -->
                                                    <div class="billing-btn">
                                                        <button type="submit">Enregistrer</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default single-my-account">
                                    <div class="panel-heading my-account-title">
                                        <h3 class="panel-title"><span>2 .</span> <a data-bs-toggle="collapse" href="#my-account-2">Changez votre mot de passe</a></h3>
                                    </div>
                                    <div id="my-account-2" class="panel-collapse collapse" data-bs-parent="#faq">
                                        <div class="panel-body">
                                            <div class="myaccount-info-wrapper">
                                                <!-- div class="account-info-wrapper">
                                                    <h4>Change Password</h4>
                                                    <h5>Your Password</h5>
                                                </div> -->
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="billing-info">
                                                            <label>Password</label>
                                                            <input type="password">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="billing-info">
                                                            <label>Password Confirm</label>
                                                            <input type="password">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="billing-back-btn">
                                                    <!-- <div class="billing-back">
                                                        <a href="#"><i class="fa fa-arrow-up"></i> back</a>
                                                    </div> -->
                                                    <div class="billing-btn">
                                                        <button type="submit">Enregistrer</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="panel panel-default single-my-account">
                                    <div class="panel-heading my-account-title">
                                        <h3 class="panel-title"><span>3 .</span> <a data-bs-toggle="collapse" href="#my-account-3">Modify your address book entries   </a></h3>
                                    </div>
                                    <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                        <div class="panel-body">
                                            <div class="myaccount-info-wrapper">
                                                <div class="account-info-wrapper">
                                                    <h4>Address Book Entries</h4>
                                                </div>
                                                <div class="entries-wrapper">
                                                    <div class="row">
                                                        <div class="col-md-6 d-flex align-items-center justify-content-center">
                                                            <div class="entries-info text-center">
                                                                <p>Keith L. Castro </p>
                                                                <p>  559 Pratt Avenue </p>
                                                                <p> Orchards, WA 98662 </p>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 d-flex align-items-center justify-content-center">
                                                            <div class="entries-edit-delete text-center">
                                                                <button class="edit">Edit</button>
                                                                <button>Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="billing-back-btn">
                                                    <div class="billing-back">
                                                        <a href="#"><i class="fa fa-arrow-up"></i> back</a>
                                                    </div>
                                                    <div class="billing-btn">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import("@/components/TheHeader"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            TheFooter: () => import("@/components/TheFooter"),
        },
        head() {
            return {
                title: "My Account"
            }
        }
    }
</script>
