const Contact = require("../../model/contacts/contactsModel");
const { paginationLabels } = require("../../helpers/pagination");

const listContacts = async (owner, favoriteQuery, pageQuery, limitQuery) => {
    const options = {
        page: pageQuery || 1,
        limit: limitQuery || 2,
        customLabels: paginationLabels,
    };

    if (favoriteQuery === -1) {
        return await Contact.paginate(
            Contact.find({ owner }).select({
                __v: 0,
            }),
            options,
            function (err, result) {
                if (err) {
                    console.log(`ERROR: ${err.message}`);
                } else {
                    const data = {
                        itemCount: result.paginator.itemCount,
                        perPage: result.paginator.perPage,
                        pageCount: result.paginator.pageCount,
                        currentPage: result.paginator.currentPage,
                        pagingCounter: result.paginator.pagingCounter,
                        hasPrevPage: result.paginator.hasPrevPage,
                        hasNextPage: result.paginator.hasNextPage,
                        next: result.paginator.next,
                        prev: result.paginator.prev,
                        itemsList: result.itemsList,
                    };

                    return data;
                }
            }
        );
    } else {
        return await Contact.paginate(
            Contact.find({ owner, favorite: favoriteQuery }).select({
                __v: 0,
            }),
            options,
            function (err, result) {
                if (err) {
                    console.log(`ERROR: ${err.message}`);
                } else {
                    const data = {
                        itemCount: result.paginator.itemCount,
                        perPage: result.paginator.perPage,
                        pageCount: result.paginator.pageCount,
                        currentPage: result.paginator.currentPage,
                        pagingCounter: result.paginator.pagingCounter,
                        hasPrevPage: result.paginator.hasPrevPage,
                        hasNextPage: result.paginator.hasNextPage,
                        next: result.paginator.next,
                        prev: result.paginator.prev,
                        itemsList: result.itemsList,
                    };

                    return data;
                }
            }
        );
    }
};

module.exports = listContacts;
